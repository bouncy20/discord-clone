<<<<<<< HEAD
const ServerIdPage = () => {
    return ( 
=======
// In your dynamic route component file `/pages/servers/[serverId].tsx`

import { GetStaticProps, GetStaticPaths } from 'next';

interface ServerIdPageProps {
    serverId: string;
}

const ServerIdPage: React.FC<ServerIdPageProps> = ({ serverId }) => {
    return (
>>>>>>> 25e5abc9416e65719d3112a3c4b3c7651faadeab
        <div>
            Server ID Page
        </div>
     );
}
 
export default ServerIdPage;