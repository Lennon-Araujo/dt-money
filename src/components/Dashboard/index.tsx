import { Summary } from "../Summary";
import { TransationsTable } from "../TransactionsTable";
import { Container } from "./styles";

export function Dashboard() {
  return (
      <Container>
        <Summary></Summary>
        <TransationsTable></TransationsTable>
      </Container>
  );
}