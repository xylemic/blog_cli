const readline = require('readline');

const blogs = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const showMenu = () => {
  console.log(`
    Blog CLI
    ------------
    1. Add a blog
    2. Update a blog
    3. Delete a blog
    4. Display all blogs
    5. Exit
    `);
    rl.question('Choose an option: ', handleMenu);
}

const handleMenu = (choice) => {
  switch (choice.trim()) {
    case '1':
      rl.question('Enter blog title: ', (title) => {
        rl.question('Enter blog content: ', (content) => {
          addBlog(title, content);
          console.log('Blog added successfully!');
          showMenu();
        });
      });
      break;

    case '2':
      rl.question('Enter blog ID to update: ', (id) => {
        rl.question('Enter new title: ', (updatedTitle) => {
          rl.question('Enter new content: ', (updatedContent) => {
            updateBlog(Number(id), updatedTitle, updatedContent);
            showMenu();
          });
        });
      });
      break;
    
    case '3':
      rl.question('Enter blog ID to delete: ', (id) => {
        deleteBlog(Number(id));
        console.log('Blog deleted successfully!');
        showMenu();
      });
      break;
    
    case '4':
      displayBlogs();
      showMenu();
      break;

    case '5':
      console.log('Exiting Blog CLI. Goodbye!');
      rl.close();
      break;

    default:
      console.log('Invalid choice. Please try again.');
      showMenu();
  }
};

const addBlog = (title, content) => {
  const newBlog = {
    id: blogs.length + 1,
    title,
    content
  };

  blogs.push(newBlog);
};

const updateBlog = (id, updatedTitle, updatedContent) => {
  const blogIndex = blogs.findIndex(blog => blog.id === id);
  if (blogIndex !== -1) {
    blogs[blogIndex].title = updatedTitle;
    blogs[blogIndex].content = updatedContent;
    console.log('Blog updated successfully!');
  } else {
    console.log('Blog not found.');
  }
};

const deleteBlog = (id) => {
  const blogIndex = blogs.findIndex(blog => blog.id === id);
  if (blogIndex !== -1) {
    blogs.splice(blogIndex, 1);
    console.log('Blog deleted successfully!');
  } else {
    console.log('Blog not found.');
  }
};

const displayBlogs = () => {
  if (blogs.length === 0) {
    console.log('No blogs found.');
    return;
  } else {
    console.log('All blogs:');
    blogs.forEach(blog => {
      console.log(`ID: ${blog.id}, Title: ${blog.title}, Content: ${blog.content}`);
    });
  }
};

showMenu();

