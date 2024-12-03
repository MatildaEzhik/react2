import React from 'react';

function Main() {
  const books = [
    {
      id: 1,
      title: 'kniga1',
      description: 'description1',
    },
    {
      id: 2,
      title: 'kniga2',
      description: 'description2',
    },
    {
      id: 3,
      title: 'kniga3',
      description: 'description3',
    },
  ];

  return (
    <main style={{ padding: '20px' }}>
      <h2>Welcome to Our Library</h2>
      <p>Total Books: {books.length}</p>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {books.map((book) => (
          <div
            key={book.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '10px',
              width: '200px',
            }}
          >
            <img src={book.image} alt={book.title} style={{ width: '100%' }} />
            <h3>{book.title}</h3>
            <p>{book.description}</p>
            <button style={{ marginTop: '10px' }}>Read</button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Main;
