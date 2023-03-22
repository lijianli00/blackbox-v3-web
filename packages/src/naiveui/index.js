import Icon from './Icon/index.vue'
import Form from './Form/index.vue'
import FormItem from './FormItem/index.vue'
import Container from './Container/index.vue'
import BetterScroll from './BetterScroll/index.vue'
import DataTable from './DataTable/index.vue'
import Search from './Search/index.vue'
import CollapseTransition from './CollapseTransition/index.vue'
import Tree from './Tree/index.vue'
import TreeSelectDept from './TreeSelectDept/index.vue'
import TreeSelectPerson from './TreeSelectPerson/index.vue'
import SelectComma from './SelectComma/index.vue'
import SearchFold from './SearchFold/index.vue'
import GridForm from './GridForm/index.vue'
import ContentLayout from './ContentLayout/index.vue'
import UploadImage from './UploadImage/index.vue'
import SearchArea from './SearchArea/index.vue'

const components = [
  Icon,
  Form,
  FormItem,
  Container,
  BetterScroll,
  DataTable,
  Search,
  CollapseTransition,
  Tree,
  TreeSelectDept,
  TreeSelectPerson,
  SelectComma,
  SearchFold,
  GridForm,
  ContentLayout,
  UploadImage,
  SearchArea,
]

export const setupComponents = (app) => {
  components.forEach((item) => {
    app.component(item.name, item)
  })
}
