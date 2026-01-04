import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';

export function App() {
    console.log('Oi');

    return (
        <>
            <Heading>Olá, mundo!</Heading>
            <Heading>Olá, mundo 2!</Heading>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                eaque perferendis omnis esse provident animi, numquam, suscipit
                autem eum aspernatur corporis nihil nobis ratione sapiente
                obcaecati odio vitae eos molestias!
            </p>
        </>
    );
}
