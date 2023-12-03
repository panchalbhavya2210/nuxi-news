// pages/index.vue

export default {
  async asyncData({ params }) {
    try {
      const response = await fetch(
        `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=freecode`
      );
      const data = await response.json();

      return { searchData: data };
    } catch (error) {
      console.error("Error fetching data:", error);
      return { searchData: null };
    }
  },
};
