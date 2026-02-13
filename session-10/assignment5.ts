type Combine<A, B> = A & B;
type Either<A, B> = A | B;

type OrderBase = {
    orderId: number;
    amount: number;
  };
  type Auditable = {
    createdAt: string;
    createdBy: string;
  };
//   type Order = OrderBase & Auditable;
type OrderCombine = Combine<OrderBase, Auditable>;

// type OrderEither = OrderBase | Auditable;
type OrderEither = Either<OrderBase, Auditable>;

type StrOrNum = Either<string, number>

const enrNo: StrOrNum = "22BECE30153";
const rollNo: StrOrNum = 30153;

// How does this improve readability?
// This tells that “This is intentionally flexible.” 
// It is especially useful if it appears many times 
// in code, reduces repetition



