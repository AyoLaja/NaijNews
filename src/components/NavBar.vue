<template>
    <div class="columns navBar">
        <div class="column dateTime">
            <div class="">
                <div class="date">{{this.appDate}}</div>
                <div class="time">{{this.appTime}}</div>
            </div>
        </div>
        <div class="column">
            <div class="tabs is-centered">
                <ul>
                    <router-link to="/" tag="li" active-class="is-active" exact><a id="homeLink">
                        <!-- <ion-icon name="home"></ion-icon> -->
                        N
                    </a></router-link>
                    <router-link to="/features" tag="li" active-class="is-active"><a>Featured</a></router-link>
                    <router-link to="/business" tag="li" active-class="is-active"><a>Business</a></router-link>
                    <router-link to="/health" tag="li" active-class="is-active"><a>Health</a></router-link>
                    <router-link to="/technology" tag="li" active-class="is-active"><a>Technology</a></router-link>
                    <router-link to="/science" tag="li" active-class="is-active"><a>Science</a></router-link>
                    <router-link to="/entertainment" tag="li" active-class="is-active"><a>Entertainment</a></router-link>
                    <router-link to="/sports" tag="li" active-class="is-active"><a>Sports</a></router-link>
                    <router-link to="/world" tag="li" active-class="is-active"><a>World</a></router-link>
                    <router-link to="/usa" tag="li" active-class="is-active"><a>USA</a></router-link>
                </ul>
            </div>
        </div>
        <div class="column weather has-text-right">
            <div>Weather</div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      appTime: "",
      appDate: ""
    };
  },
  mounted() {
    this.startTime();
    this.getDate();
  },
  methods: {
    startTime() {
      let today = new Date();
      let h = today.getHours();
      let m = today.getMinutes();
      let s = today.getSeconds();
      let meridian = "AM";

      if (h == 0) {
        h = 12;
      } else if (h > 12) {
        h = h - 12;
        meridian = "PM";
      }

      h = h < 10 ? "0" + h : h;
      m = m < 10 ? "0" + m : m;
      s = s < 10 ? "0" + s : s;

      let time = `${h}:${m} ${meridian}`;

      this.appTime = time;

      setTimeout(this.startTime, 1000);
    },
    getDate() {
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec"
      ];
      const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

      let today = new Date();
      let day = days[today.getDay()];
      let date = today.getDate();
      let month = months[today.getMonth()];
      let year = today.getFullYear();

      let todayDate = `${day}, ${month} ${date}, ${year}`;

      this.appDate = todayDate;
    }
  }
};
</script>

<style lang="css" src="../styles/appStyles.css"></style>

<style scoped>
.navBar {
    position: sticky;
    position: -webkit-sticky;
    top: 0px;
    z-index: 1;
    background-color: inherit;
}

a {
  color: #fff;
  letter-spacing: 1px;
  font-size: 13px;
}

a:hover,
.tabs li.is-active a {
  border-bottom-color: #15c715;
  color: #15c715;
}

.tabs ul {
  border-bottom-width: 0px;
}

#homeLink {
  font-family: "Monoton", "Avenir", Helvetica, Arial, sans-serif;
  font-size: 20px;
  border-bottom: none;
}

ion-icon {
  font-size: 30px;
}

.dateTime,
.weather {
  font-weight: bold;
  font-size: 9px;
  display: flex;
  align-items: center;
}

.weather {
  justify-content: flex-end;
}
</style>