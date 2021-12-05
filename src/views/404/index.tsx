import {
  defineComponent, onMounted, ref, onUnmounted,
} from 'vue';

export default defineComponent({
  setup() {
    const time = ref('');
    const date = ref('');
    const weeks = ref(['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']);
    const timerID = ref<number>(0);
    function zeroPadding(num: string | number, digit: number) {
      let zero = '';
      for (let i = 0; i < digit;) {
        zero += '0';
        i += 1;
      }
      return (zero + num).slice(-digit);
    }
    function updateTime() {
      const cd = new Date();
      time.value = `${zeroPadding(cd.getHours(), 2)}:${zeroPadding(cd.getMinutes(), 2)}:${zeroPadding(cd.getSeconds(), 2)} `;
      date.value = `${zeroPadding(cd.getFullYear(), 4)}-${zeroPadding(cd.getMonth() + 1, 2)}-${zeroPadding(cd.getDate(), 2)} ${weeks.value[cd.getDay()]} `;
    }
    onMounted(() => {
      updateTime();
      timerID.value = setInterval(updateTime, 1000) as unknown as number;
    });
    onUnmounted(() => {
      clearInterval(timerID.value);
    });
    return {
      time, date, weeks, timerID,
    };
  },
  render() {
    return (
      <div></div>
    );
  },
});
