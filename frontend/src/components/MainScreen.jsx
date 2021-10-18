import TransactionsTable from "./TransactionsTable";
import PageHeader from "./PageHeader";

const MainScreen = () => {
  return (
    <div>
      <PageHeader className="page-header" />
      <TransactionsTable className="all-transactions" />
    </div>
  );
};

export default MainScreen;
