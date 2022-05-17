<template>
  <div class="demo">
    <Button type="primary" @click="handleClick">Welcome!</Button>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  setup() {
  },
  methods: {
    handleClick() {
      this.$Message.info('Welcome to View UI Plus Demo!')
    }
  }
}
</script>

<style lang="less" scoped>
  .demo{
    color: lightcoral;
    font-size: @font-size;
    text-align: center;
    margin: 300px 0 0 0;
  }
</style>
