import { defineStore } from 'pinia'
import { onBeforeMount,onMounted, type Ref, ref } from 'vue'

export const useEnvStore = defineStore('env', () => {
  const debug = ref(true)
  function toggle() {
    debug.value = !debug.value
  }

  return { debug, toggle }
})

export type useTimeParams = {
  silent?: boolean
}
export type useTimeReturn = {
  time: Ref<string>
}

export const useTime = (params: useTimeParams): useTimeReturn => {
  let timer: number
  const { silent = true } = params
  const time = ref(new Date().toLocaleString())
  onMounted(() => {
    if (!silent) {
      timer = window.setInterval(() => {
        time.value = new Date().toLocaleString()
      }, 1000)
    }
  })
  onBeforeMount(() => {
    if (!silent && timer) {
      clearInterval(timer)
    }
  })
  return { time }
}
