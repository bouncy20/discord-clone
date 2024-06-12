import { GetStaticProps, GetStaticPaths } from 'next';

interface ServerIdPageProps {
    serverId: string;
}

const ServerIdPage: React.FC<ServerIdPageProps> = ({ serverId }) => {
    return (
        <div>
            Server ID Page: {serverId}
        </div>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    // Fetch or define your server IDs here. This is an example.
    const serverIds = ['server1', 'server2', 'server3'];

    const paths = serverIds.map(serverId => ({
        params: { serverId },
    }));

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { serverId } = params as { serverId: string };

    return {
        props: {
            serverId,
        },
    };
};

export default ServerIdPage;
