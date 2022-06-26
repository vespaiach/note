import { GetStaticProps } from 'next';
import Head from 'next/head';

import Layout from '@components/Layout';
import { getAllTagsData } from '@lib/posts';
import MailIcon from '@components/MailIcon';
import LinkedInIcon from '@components/LinkedInIcon';
import GithubIcon from '@components/GithubIcon';

export default function About({ tags }: { tags: TagData[] }) {
    return (
        <Layout>
            <Head>
                <title>About - Nguyen</title>
            </Head>
            <main className="mb-auto">
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                    <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
                        <div className="flex flex-col items-center pt-8">
                            <img src="/images/vespaiach.jpeg" className="rounded-full w-40" />
                            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
                                Trinh Nguyen
                            </h3>
                            <div className="text-gray-500 dark:text-gray-400">
                                Developer / Programmer / Coder
                            </div>
                        </div>
                        <div className="prose max-w-none pt-10 pb-8 dark:prose-invert">
                            <p>
                                Hello, my name is Trinh Nguyen. I'm a developer with a passion for the web and
                                all things Open Source. I've been spending most of my time on the front end
                                things with JavaScript and its ecosystem.
                            </p>
                            <p>
                                Currently, I'm a freelance developer and a contributer for Open-Source
                                community. Before that, I worked at some of consultant companies and help many
                                startups to build websites and web applications for mid to large scale client
                                projects.
                            </p>
                            <p>
                                I'm opening for new opportunites, now. Please reach me at:
                                <span className='inline-flex items-baseline gap-2 ml-2'>
                                    <a
                                        className="text-sm text-gray-500 transition hover:text-gray-600"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="mailto:nta.toan@gmail.com">
                                        <span className="sr-only">mail</span>
                                        <MailIcon />
                                    </a>
                                    <a
                                        className="text-sm text-gray-500 transition hover:text-gray-600"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://www.linkedin.com/in/trinh-nguyen-0a701526/">
                                        <span className="sr-only">linkedin</span>
                                        <LinkedInIcon />
                                    </a>
                                    <a
                                        className="text-sm text-gray-500 transition hover:text-gray-600"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://github.com/vespaiach">
                                        <span className="sr-only">github</span>
                                        <GithubIcon />
                                    </a>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const tags = await getAllTagsData();
    return {
        props: {
            tags,
        },
    };
};
