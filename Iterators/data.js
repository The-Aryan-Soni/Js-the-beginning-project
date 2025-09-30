const books = [
  { title: 'The Alchemist', publisher: 'HarperCollins', genre: 'Fiction', type: 'Novel', publish: 1988, edition: 2015 },
  { title: 'A Brief History of Time', publisher: 'Bantam Books', genre: 'Science', type: 'Non-Fiction', publish: 1988, edition: 2017 },
  { title: 'To Kill a Mockingbird', publisher: 'J.B. Lippincott & Co.', genre: 'Classic Literature', type: 'Novel', publish: 1960, edition: 2010 },
  { title: 'Atomic Habits', publisher: 'Penguin Random House', genre: 'Self-Help', type: 'Non-Fiction', publish: 2018, edition: 2023 },
  { title: 'The Great Gatsby', publisher: 'Charles Scribner\'s Sons', genre: 'Classic Fiction', type: 'Novel', publish: 1925, edition: 2013 },
  { title: 'Harry Potter and the Sorcerer\'s Stone', publisher: 'Bloomsbury', genre: 'Fantasy', type: 'Novel', publish: 1997, edition: 2015 },
  { title: 'The Power of Now', publisher: 'New World Library', genre: 'Spirituality', type: 'Non-Fiction', publish: 1997, edition: 2021 },
  { title: 'Python Crash Course', publisher: 'No Starch Press', genre: 'Programming', type: 'Textbook', publish: 2015, edition: 2019 },
  { title: 'The Psychology of Money', publisher: 'Harriman House', genre: 'Finance', type: 'Non-Fiction', publish: 2020, edition: 2022 },
  { title: 'Educated', publisher: 'Random House', genre: 'Biography', type: 'Memoir', publish: 2018, edition: 2021 },
  { title: 'Sapiens: A Brief History of Humankind', publisher: 'Harvill Secker', genre: 'History', type: 'Non-Fiction', publish: 2011, edition: 2022 },
  { title: 'Rich Dad Poor Dad', publisher: 'Plata Publishing', genre: 'Finance', type: 'Non-Fiction', publish: 1997, edition: 2017 }
]

const userBooks = books.filter((bk)=>bk.genre === 'History')

let pub = books.filter((pb)=> {return pb.publish>= 2000} )

pub = books.filter((pb)=> {return pb.publish>= 1900 && pb.publish <= 2000 && pb.type === "Non-Fiction"} )

// console.log(userBooks);

console.log(pub);




