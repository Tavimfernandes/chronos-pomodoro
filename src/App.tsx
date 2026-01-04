import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

export function App() {
    return (
        <>
            <Heading>
                Olá, mundo!
                <button>
                    <TimerIcon />
                </button>
            </Heading>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                eaque perferendis omnis esse provident animi, numquam, suscipit
                autem eum aspernatur corporis nihil nobis ratione sapiente
                obcaecati odio vitae eos molestias!
            </p>
        </>
    );
}
