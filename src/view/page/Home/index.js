let Home = {
  render: async () => {
    let texto = "Click me!";
    let view = `
      <div>
        <h1>Home</h1>
        <h2>Hello!!!</h2>
        <button id="test">${texto}</button>
      </div>
    `
    return view
  },
  after_render: async () => {
    let button = document.getElementById('test');
    button.addEventListener('click', () => {
      alert('Tudo certo')
    })
  }
}

export default Home;