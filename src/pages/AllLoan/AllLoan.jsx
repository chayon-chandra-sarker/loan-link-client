import Container from "../../Componentes/Container/Container";
import LoansContanet from "./LoansContanet/LoansContanet";

const loansPromise = fetch("https://loan-link-api.vercel.app/loans").then(
  (res) => res.json(),
);

const AllLoan = () => {
  return (
    <div className="">
      <Container>
        <div className="py-10 ">
          <LoansContanet loansPromise={loansPromise}></LoansContanet>
        </div>
      </Container>
    </div>
  );
};

export default AllLoan;
