import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate, useParams } from "react-router-dom";

function Doctors() {
  const navigate = useNavigate();
  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);

  const [showFilter, setShowFilter] = useState(false);
  const [filterDoc, setFilterDoc] = useState([]);

  // List of specialities to generate filter buttons
  const specialities = [
    "General physician",
    "Gynecologist",
    "Dermatologist",
    "Pediatricians",
    "Neurologist",
    "Gastroenterologist",
  ];

  // Filter doctors by selected speciality
  useEffect(() => {
    if (speciality) {
      const filtered = doctors.filter(
        (doc) => doc.speciality.toLowerCase() === speciality.toLowerCase()
      );
      setFilterDoc(filtered);
    } else {
      setFilterDoc(doctors);
    }
  }, [doctors, speciality]);

  return (
    <div className="px-4 md:px-10 py-8 text-gray-800">
      {/* Page Title */}
      <h1 className="text-2xl sm:text-3xl font-semibold text-center mb-2">
        Browse Doctors by Speciality
      </h1>
      <p className="text-sm text-center text-gray-500 mb-6">
        Easily filter and find doctors that match your needs.
      </p>

      {/* Mobile filter toggle */}
      <div className="sm:hidden mb-4">
        <button
          onClick={() => setShowFilter(!showFilter)}
          className={`px-4 py-2 rounded border ${
            showFilter ? "bg-blue-600 text-white" : "text-blue-600 border-blue-600"
          } transition`}
        >
          {showFilter ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      {/* Filter Buttons */}
      <div
        className={`flex flex-wrap gap-3 mb-8 ${
          showFilter ? "flex" : "hidden sm:flex"
        }`}
      >
        {specialities.map((item, idx) => {
          const isActive = item.toLowerCase() === speciality?.toLowerCase();
          return (
            <button
              key={idx}
              onClick={() =>
                isActive ? navigate("/doctors") : navigate(`/doctors/${item}`)
              }
              className={`px-4 py-2 border rounded-full text-sm transition-all ${
                isActive
                  ? "bg-blue-600 text-white border-blue-600"
                  : "text-gray-600 border-gray-300 hover:bg-blue-50"
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>

      {/* Doctors List */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {filterDoc.map((doc, idx) => (
          <div
            key={idx}
            onClick={() => navigate(`/appointment/${doc._id}`)}
            className="cursor-pointer border border-blue-200 rounded-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 bg-white shadow-sm"
          >
            <img src={doc.image} alt={doc.name} className="w-full h-40 object-cover bg-blue-50" />
            <div className="p-4">
              <div className="flex items-center gap-2 text-green-600 text-sm mb-1">
                <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
                Available
              </div>
              <p className="font-medium">{doc.name}</p>
              <p className="text-sm text-blue-600">{doc.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      {/* No doctors found message */}
      {filterDoc.length === 0 && (
        <p className="text-center mt-10 text-gray-500">
          No doctors found for this speciality.
        </p>
      )}
    </div>
  );
}

export default Doctors;
