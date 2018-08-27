<template>
    <div class="columns">
        <div class="column is-one-quarter dateTime">
            <div class="columns">
                <div class="column date">{{this.appDate}}</div>
            </div>
            <div class="columns">
                <div class="column time">{{this.appTime}}</div>
            </div>
        </div>
        <div class="column is-half has-text-centered">
            <div class="content">
                <h1>NAIJ <span style="font-size: 25px;">x</span> NEWS</h1>
                <h4>Number one online news outlet</h4>
            </div>
        </div>
        <div class="column is-one-quarter has-text-right">
            <p>Weather</p>
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

      let time = `${h}:${m}:${s} ${meridian}`;

      this.appTime = time;

      setTimeout(this.startTime, 1000);
    },
    getDate() {
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    
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

<style scoped>
.content h1 {
  /* font-family: 'Hanalei Fill', cursive; */
  font-family: "Monoton", "Avenir", Helvetica, Arial, sans-serif;
  letter-spacing: 1px;
  font-size: 40px;
}

.content h1,
.content h4 {
  color: #fff;
}

.time {
    padding: 0rem 0rem 0rem 0.75rem;
}

.date {
    padding: 0.75rem 0rem 0rem 0.75rem;
}

.dateTime {
    font-weight: bold;
    font-size: 12px;
}
</style>