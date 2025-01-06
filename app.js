const blogs = [];

// function to add blog
const addBlog = (title, content) => {
  const newBlog = {
    id: blogs.length + 1,
    title,
    content,
  };

  blogs.push(newBlog);
}

// function to update blog
const updateBlog = (id, updatedTitle, updatedContent) => {
  const blogIndex = blogs.findIndex(blog => blog.id === id);

  if (blogIndex !== -1) {
    blogs[blogIndex].title = updatedTitle;
    blogs[blogIndex].content = updatedContent;
  } else {
    console.log('blog not found');
  }
}

// function to delete blog
const deleteBlog = (id) => {
  const blogIndex = blogs.findIndex(blog => blog.id === id);

  if (blogIndex !== -1) {
    blogs.splice(blogIndex, 1);
  } else {
    console.log('blog not found');
  }
}

// function to display all blogs
 const displayBlogs = () => {
  console.log('Blogs:');

  blogs.forEach(blog => {
    console.log(`id: ${blog.id}, title: ${blog.title}, content: ${blog.content}`);
  });
}

// usage
addBlog('first blog', 'this is the content of the first blog.');
addBlog('second blog', 'this is the content of the second blog.');

displayBlogs();

updateBlog(1, 'updated first blog', 'this is the updated content of the first blog.');

displayBlogs();

deleteBlog(2);

displayBlogs();
