import { describe } from "node:test";
import Text from ".";
import { customRender } from "@alura/test-commons/react-testing-library";

const render = customRender()

describe("<Text />", () => {
    test("Text renderiza como h1 quando solicitado", () => {
        const { container } = render(<Text tag="h1">Sample text</Text>);
        expect(container).toMatchSnapshot()
    })
})