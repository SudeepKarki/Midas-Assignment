import { Col, Flex, Row } from "antd";
import CustomCard, { CardProps } from "../Card";

interface CardListProps {
  cardList: CardProps[];
}
export default function CardList({ cardList }: CardListProps) {
  return (
    <>
      <Flex gap={10} flex={"1 0 0"}>
        {cardList.map((card) => (
          <Flex key={card.title} flex="1 0 0">
            <CustomCard {...card} />
          </Flex>
        ))}
      </Flex>
    </>
  );
}
