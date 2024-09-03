import Text from "@alura/design/components/Text";
import sum from "@alura/utils/math/sum";

export default function HomeScreen() {
  return (
    <>
      <Text tag="h1">Olá Mundo</Text>
      <Text tag="p">2 + 2 = {sum(2, 2)}</Text>
    </>
  );
}