<template>
  <section>
    <el-select
        v-model="selectModel"
        v-el-select-loadmore="loadMore"
        class="w-full"
        :placeholder="placeHolder"
        filterable
        multiple
        :filter-method="filterList"
        @visible-change="add"
    >
      <el-option
          v-for="item in loadList"
          :key="item[prop.id]"
          :label="item[prop.label]"
          :value="item[prop.value]"
      />
    </el-select>
  </section>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    placeHolder: {
      type: String,
      default: ''
    },
    prop: {
      type: Object,
      default: () => {
        return {
          id: 'userId',
          label: 'account',
          value: 'userId'
        }
      }
    }
  },
  data () {
    return { selectModel: [], list: [], page: 1, pageSize: 10 }
  },
  computed:{
    loadList(){
      return this.list.slice(0, (this.page + 1) * this.pageSize)
    }
  },
  watch: {
    data (val) {
      this.list = val
    }
  },
  methods: {
    filterList (val) {
      this.list = this.data.filter(item =>
          JSON.stringify(item).includes(val)
      )
    },
    loadMore () {
      this.page++
    },
    add (val) {
      if (!val) {
        this.$emit('add', this.selectModel)
        this.selectModel = []
      }
    }
  }
}
</script>
