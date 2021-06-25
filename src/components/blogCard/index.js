import React from 'react';
import Moment from 'moment';
import {
    BlogCardWrapper,
    BlogCardImg,
    BlogContent,
    BlogCardHeader,
    BlogCardBody,
    BlogBtn
} from './style';


function BlogCard(props) {
    return (
        <BlogCardWrapper>
            <BlogCardImg src={props.blog.avater} />
            <BlogContent>
                <BlogCardHeader
                    title={props.blog.title}
                    date={Moment(props.blog.date).format('ll')}
                    instructor={props.blog.instructor}
                />
                <BlogCardBody
                    content={props.blog.content} />
                <BlogBtn label="Read More" url={`/blog/${props.blog.id}`} />
            </BlogContent>
        </BlogCardWrapper>
    )
}

export default BlogCard;
