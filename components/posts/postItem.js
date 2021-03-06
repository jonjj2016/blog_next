import Link from 'next/link';
import Image from 'next/image'
import classes from './post-item.module.css';

const PostItem = ({post}) => {
    const { title, image, date, slug, exerpt} = post;
    
    const formatedDate= new Date(date).toLocaleDateString('en-US',{
        day:'numeric',
        month: 'long',
        year: 'numeric'
    });
    const imagePath = `/images/posts/${slug}/${image}`;
    const linkPath = `/posts/${slug}`;
    console.log(imagePath);
    return (
        <li className={classes.post}>
            <Link href={linkPath}>
                <a>
                    <div className = {classes.image}>
                        <Image src={imagePath} alt={title} width={300} height={200}/>
                    </div>
                    <div className={classes.content}>
                        <h3>
                            {title}
                        </h3>
                        <time>
                            {formatedDate}
                        </time>
                        <p>
                            {exerpt}
                        </p>
                    </div>
                </a>
            </Link>
        </li>
    )
}

export default PostItem
