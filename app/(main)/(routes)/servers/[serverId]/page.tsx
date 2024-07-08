// In your dynamic route component file `/pages/servers/[serverId].tsx`

import { GetStaticProps, GetStaticPaths } from 'next';

interface ServerIdPageProps {
    serverId: string;
}

const ServerIdPage: React.FC<ServerIdPageProps> = ({ serverId }) => {
    return (
        <div>
            Server ID Page
        </div>
    );
}

export default ServerIdPage;
