import TransactionsTable from "./TransactionsTable";
import PageHeader from "./PageHeader";

const MainScreen = () => {
  return (
    <div>
      <PageHeader class="page-header" />
      <TransactionsTable class="all-transactions" />
    </div>
  );
};

export default MainScreen;
