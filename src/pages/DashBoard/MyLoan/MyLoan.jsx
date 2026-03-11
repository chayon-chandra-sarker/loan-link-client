// // src/pages/UserDashboard/MyLoan.jsx
// import React from "react";
// import useAuth from "../../../hooks/useAuth";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";
// import Container from "../../../Componentes/Container/Container";
// import { AiFillEye } from "react-icons/ai";
// import { IoMdClose } from "react-icons/io";
// import Swal from "sweetalert2";
// import { RiPassPendingLine } from "react-icons/ri";

// const MyLoan = () => {
//   const { user } = useAuth();
//   const axiosSecure = useAxiosSecure();

//   // Fetch loans for logged-in user
//   const { data: loans = [], refetch } = useQuery({
//     queryKey: ["my-loan", user?.email],
//     enabled: !!user?.email,
//     queryFn: async () => {
//       const res = await axiosSecure.get(`/my-loan?email=${user.email}`);
//       return res.data;
//     },
//   });

//   // Cancel loan (only if status is pending)
//   const handleLoanCancel = (id, status) => {
//     if (status !== "pending") {
//       Swal.fire("Oops!", "You can only cancel pending loans.", "info");
//       return;
//     }

//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, cancel it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         axiosSecure.delete(`/my-loan/${id}`).then((res) => {
//           if (res.data.deletedCount) {
//             refetch();
//             Swal.fire("Cancelled!", "Your loan has been cancelled.", "success");
//           }
//         });
//       }
//     });
//   };

//   // Pay loan fee
//   const handlePay = (id) => {
//     axiosSecure
//       .patch(`/pay-loan/${id}`)
//       .then((res) => {
//         if (res.data.modifiedCount) {
//           Swal.fire("Success", "Payment completed", "success");
//           refetch();
//         }
//       })
//       .catch((err) => console.log(err));
//   };

//   // View loan details
//   const handleView = (loan) => {
//     Swal.fire({
//       title: "Loan Details",
//       html: `
//         <b>Name:</b> ${loan.firstName} <br/>
//         <b>Contact:</b> ${loan.contact} <br/>
//         <b>Amount:</b> ${loan.loanAmount} <br/>
//         <b>Status:</b> ${loan.status} <br/>
//         <b>Reason:</b> ${loan.reasonForLoan} <br/>
//       `,
//       icon: "info",
//     });
//   };

//   const handleApprove = (id) => {
//     Swal.fire({
//       title: "Approve this loan?",
//       icon: "question",
//       showCancelButton: true,
//       confirmButtonText: "Yes, Approve",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         axiosSecure.patch(`/approve-loan/${id}`).then((res) => {
//           if (res.data.modifiedCount) {
//             Swal.fire("Approved!", "Loan approved successfully", "success");
//             refetch();
//           }
//         });
//       }
//     });
//   };

//   return (
//     <div>
//       <Container>
//         <div>
//           <h2 className="text-center font-medium text-4xl py-5">
//             My Loans ({loans.length})
//           </h2>
//           <div className="overflow-x-auto">
//             <table className="table table-zebra w-full">
//               <thead>
//                 <tr>
//                   <th>SL</th>
//                   <th>Name</th>
//                   <th>Contact</th>
//                   <th>Amount</th>
//                   <th>Status</th>
//                   <th>Fee Status</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {loans.map((loan, index) => (
//                   <tr key={loan._id}>
//                     <td>{index + 1}</td>
//                     <td>{loan.firstName}</td>
//                     <td>{loan.contact}</td>
//                     <td>{loan.loanAmount}</td>
//                     <td>{loan.status}</td>
//                     <td>
//                       {loan.feeStatus === "paid" ? (
//                         <span className="badge bg-green-500">Paid</span>
//                       ) : (
//                         <span className="badge">Unpaid</span>
//                       )}
//                     </td>
//                     <td className="flex gap-2">
//                       {/* View */}
//                       <button
//                         className="btn btn-square btn-info"
//                         onClick={() => handleView(loan)}
//                       >
//                         <AiFillEye />
//                       </button>

//                       {/* Approve */}
//                       {loan.status === "pending" && (
//                         <button
//                           className="btn btn-square btn-primary"
//                           onClick={() => handleApprove(loan._id)}
//                         >
//                           <RiPassPendingLine />
//                         </button>
//                       )}

//                       {/* Cancel */}
//                       {loan.status === "pending" && (
//                         <button
//                           className="btn btn-square btn-warning"
//                           onClick={() =>
//                             handleLoanCancel(loan._id, loan.status)
//                           }
//                         >
//                           <IoMdClose />
//                         </button>
//                       )}

//                       {/* Pay */}
//                       {loan.feeStatus === "unpaid" && (
//                         <button
//                           className="btn btn-square btn-success "
//                           onClick={() => handlePay(loan._id)}
//                         >
//                           Pay
//                         </button>
//                       )}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default MyLoan;

import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Container from "../../../Componentes/Container/Container";
import { AiFillEye } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import Swal from "sweetalert2";

const MyLoan = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: loans = [], refetch } = useQuery({
    queryKey: ["my-loan", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/my-loan?email=${user.email}`);
      return res.data;
    },
  });

  // Cancel Loan
  const handleLoanCancel = (id, status) => {
    if (status !== "pending") {
      Swal.fire("Oops!", "Only pending loans can be cancelled.", "info");
      return;
    }

    Swal.fire({
      title: "Cancel Loan?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/my-loan/${id}`).then((res) => {
          if (res.data.deletedCount) {
            Swal.fire("Cancelled!", "Loan cancelled successfully", "success");
            refetch();
          }
        });
      }
    });
  };

  // Pay Fee
  const handlePay = (id) => {
    axiosSecure.patch(`/pay-loan/${id}`).then((res) => {
      if (res.data.modifiedCount) {
        Swal.fire("Success", "Payment Completed", "success");
        refetch();
      }
    });
  };

  // View Details
  const handleView = (loan) => {
    Swal.fire({
      title: "Loan Details",
      html: `
        <p><b>Name:</b> ${loan.firstName}</p>
        <p><b>Contact:</b> ${loan.contact}</p>
        <p><b>Amount:</b> ${loan.loanAmount}</p>
        <p><b>Status:</b> ${loan.status}</p>
        <p><b>Reason:</b> ${loan.reasonForLoan}</p>
      `,
      icon: "info",
    });
  };

  return (
    <Container>
      <div>
        <h2 className="text-center text-4xl font-bold py-6">
          My Loans ({loans.length})
        </h2>

        {loans.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">No loan applications yet</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <thead className="bg-base-200">
                <tr>
                  <th>SL</th>
                  <th>Name</th>
                  <th>Contact</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Fee</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {loans.map((loan, index) => (
                  <tr key={loan._id}>
                    <td>{index + 1}</td>
                    <td>{loan.firstName}</td>
                    <td>{loan.contact}</td>
                    <td>${loan.loanAmount}</td>

                    {/* Status */}
                    <td>
                      {loan.status === "approved" && (
                        <span className="badge badge-success">
                          Approved
                        </span>
                      )}
                      {loan.status === "pending" && (
                        <span className="badge badge-warning">
                          Pending
                        </span>
                      )}
                      {loan.status === "rejected" && (
                        <span className="badge badge-error">
                          Rejected
                        </span>
                      )}
                    </td>

                    {/* Fee */}
                    <td>
                      {loan.feeStatus === "paid" ? (
                        <span className="badge badge-success">Paid</span>
                      ) : (
                        <span className="badge badge-error">Unpaid</span>
                      )}
                    </td>

                    {/* Actions */}
                    <td className="flex gap-2">

                      <button
                        className="btn btn-sm btn-info"
                        onClick={() => handleView(loan)}
                      >
                        <AiFillEye />
                      </button>

                      {loan.status === "pending" && (
                        <button
                          className="btn btn-sm btn-warning"
                          onClick={() =>
                            handleLoanCancel(loan._id, loan.status)
                          }
                        >
                          <IoMdClose />
                        </button>
                      )}

                      {loan.feeStatus === "unpaid" &&
                        loan.status === "approved" && (
                          <button
                            className="btn btn-sm btn-success"
                            onClick={() => handlePay(loan._id)}
                          >
                            Pay Fee
                          </button>
                        )}
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Container>
  );
};

export default MyLoan;
