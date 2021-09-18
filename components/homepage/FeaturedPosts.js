import classes from './featured-posts.module.css';
import PostGrid from '../posts/postGrid';

const Featured = ({posts=[]}) => {
    return (
        <section className={classes.latest}>
            <h2>Featured Posts</h2>
            <PostGrid posts={posts}/>
        </section>
    )
}

export default Featured
