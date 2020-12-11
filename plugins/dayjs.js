import dayjs from 'dayjs'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import weekday from 'dayjs/plugin/weekday'
import duration from 'dayjs/plugin/duration'
import advancedFormat from 'dayjs/plugin/advancedFormat'

import 'dayjs/locale/fr'

dayjs.locale('fr')
dayjs.extend(duration)
dayjs.extend(weekOfYear)
dayjs.extend(weekday)
dayjs.extend(advancedFormat)

export default (context, inject) => {
  context.$dayjs = dayjs
  inject('dayjs', dayjs)
}
