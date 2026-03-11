
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router";

const ManageLoans = () => {
  const axiosSecure = useAxiosSecure();
  const [search, setSearch] = useState("");

  const { data: loans = [], refetch } = useQuery({
    queryKey: ["manager-loans"],
    queryFn: async () => {
      const res = await axiosSecure.get("/loans");
      return res.data;
    },
  });

  // Delete loan
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This loan will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/loans/${id}`).then(() => {
          refetch();
          Swal.fire("Deleted!", "Loan removed successfully", "success");
        });
      }
    });
  };

  // Search filter
  const filteredLoans = loans.filter(
    (loan) =>
      loan.title.toLowerCase().includes(search.toLowerCase()) ||
      (loan.category && loan.category.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Manage Loans</h2>

      <div className="flex flex-col md:flex-row md:justify-between items-start mb-4 gap-2">
        <input
          type="text"
          placeholder="Search by title or category"
          className="input input-bordered w-full md:w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
       
      </div>

      {filteredLoans.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          No loans found.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead className="bg-base-200">
              <tr>
                <th>SL</th>
                <th>Image</th>
                <th>Title</th>
                <th>Interest</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredLoans.map((loan, index) => (
                <tr key={loan._id}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={loan.image || "https://i.ibb.co/2kRkz9m/user.png"}
                      alt={loan.title}
                      className="w-16 h-16 rounded object-cover"
                    />
                  </td>
                  <td>{loan.title}</td>
                  <td>
                    <span className="badge badge-info">{loan.interestRate}%</span>
                  </td>
                  <td>{loan.category}</td>
                  <td className="flex gap-2">
                    <Link
                      to={`/dashboard/update-loan/${loan._id}`}
                      className="btn btn-sm btn-outline btn-info"
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => handleDelete(loan._id)}
                      className="btn btn-sm btn-outline btn-error"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      )}
    </div>
  );
};

export default ManageLoans;