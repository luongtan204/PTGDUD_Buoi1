const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
          <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-pink-600 mb-4">CAKE ZONE</h1>
            <p className="text-xl md:text-2xl text-gray-700">THE BEST CAKE IN LONDON</p>
            <div className="mt-10">
              <img 
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587" 
                alt="Delicious cakes"
                className="mx-auto rounded-lg shadow-xl w-full max-w-4xl"
              />
            </div>
          </div>
        </div>
      );
}
export default Home