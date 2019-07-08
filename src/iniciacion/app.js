 Vue.component("movie-card", {
  props: ["image", "title"],
  template: `
        <div>
        <img width="100" v-bind:src="image" v-bind:alt="title" />
        <h2>{{ title }}</h2>
        </div>
    `
});

Vue.component("tv-show-list", {
  data: function() {
    return {
      movies: [
        {
          seasons: 3,
          title: "Regreso al Futuro",
          image:
            "http://es.web.img3.acsta.net/pictures/14/04/03/13/45/034916.jpg"
        },
        {
          seasons: 3,
          title: "Matrix",
          image:
            "http://t0.gstatic.com/images?q=tbn:ANd9GcQq3pIz-aKgkmYX1dJ-EL-AlHSPcOO7wdqRIJ5gJy9qNinXpmle"
        },
        {
          seasons: 1,
          title: "Interestellar",
          image:
            "http://t1.gstatic.com/images?q=tbn:ANd9GcRf61mker2o4KH3CbVE7Zw5B1-VogMH8LfZHEaq3UdCMLxARZAB"
        }
      ]
    };
  },
  template: `
        <tv-show
        v-for="(movie,index) in movies"
        :key="index"
        :name="movie.title"
        :seasons="movie.seasons"
        >
        </tv-show>
        `
});

Vue.component("tv-show", {
  props: {
    name: String,
    seasons: Number
  },
  template: `
        <div>
        <strong> {{name}} </strong>
        ({{ seasons}}) Temporadas
        </div>
    `
});
new Vue({
  el: "#app",
  data: {
    movies: [
      {
        seasons: 3,
        title: "Regreso al Futuro",
        image: "http://es.web.img3.acsta.net/pictures/14/04/03/13/45/034916.jpg"
      },
      {
        seasons: 3,
        title: "Matrix",
        image:
          "http://t0.gstatic.com/images?q=tbn:ANd9GcQq3pIz-aKgkmYX1dJ-EL-AlHSPcOO7wdqRIJ5gJy9qNinXpmle"
      },
      {
        seasons: 1,
        title: "Interestellar",
        image:
          "http://t1.gstatic.com/images?q=tbn:ANd9GcRf61mker2o4KH3CbVE7Zw5B1-VogMH8LfZHEaq3UdCMLxARZAB"
      }
    ]
  }
  // template:`
  // <div>

  // <movie-card v-for="(movie,index) in movies"
  // :key="index"
  // :title="movie.title"
  // :image="movie.image">

  // </movie-card>
  // </div>
  // `
});
