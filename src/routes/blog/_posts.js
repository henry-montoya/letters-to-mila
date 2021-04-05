import all from './posts/*.md';

export default all
  .filter(({ status }) => status === 'complete')
  .map((post) => {
    return { ...post, html: post.html.replace(/^\t{3}/gm, '') };
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date));
