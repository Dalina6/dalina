export default {
  data() {
    return {
      even: null,
      odd: null,
      count_even: 0,
      count_odd: 0,
    };
  },
  methods: {
    evenPosts(data, index) {
      if ((index & 1) === 0) {
        return data;
      }
    },
    oddPosts(data, index) {
      if ((index & 1) === 1) {
        return data;
      }
    },

    colorizefirstColumn(data, index, array) {
      if (this.count_even == 0) {
        data.color = "mint";
        this.count_even++;
      } else if (this.count_even == 1) {
        data.color = "gray";
        this.count_even++;
      } else {
        data.color = "acqua-marine";
        this.count_even = 0;
      }
      if (array.length - 1 == index) {
        this.count_even = 0;
      }
      return data;
    },
    colorizesecondColumn(data, index, array) {
      if (this.count_odd == 0) {
        this.count_odd++;
        data.color = "acqua-marine";
      } else if (this.count_odd == 1) {
        this.count_odd++;
        data.color = "mint";
      } else {
        data.color = "gray";
        this.count_odd = 0;
      }

      if (array.length - 1 == index) {
        this.count_odd = 0;
      }

      return data;
    },
  },
};
