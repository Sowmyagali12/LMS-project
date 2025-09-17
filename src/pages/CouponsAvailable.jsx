import React from "react";
import { Link, Outlet } from "react-router-dom";

const CouponsAvailable = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Coupons Available</h1>

      {/* Sub-navigation */}
      <nav className="mb-4">
        <Link className="mr-4 text-blue-500" to="jobPortal">Job Portal</Link>
        <Link className="text-blue-500" to="recentPlacementCompanies">Recent Placement Companies</Link>
      </nav>

      {/* Nested route will render here */}
      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  );
};

export default CouponsAvailable;
