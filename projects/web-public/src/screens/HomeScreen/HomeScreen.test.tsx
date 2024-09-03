import HomeScreen from "./HomeScreen";
import { customRender } from "@alura/test-commons/react-testing-library";

function CustomWrapper({ children }) {
    return <section>{children}</section>
}

const render = customRender(CustomWrapper)

describe('<HomeScreen />', () => {
    test('renders the page', () => {
        const { container } = render(<HomeScreen />);
        expect(container).toMatchSnapshot()
    });
});