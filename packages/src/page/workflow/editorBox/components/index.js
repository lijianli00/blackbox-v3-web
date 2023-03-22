import NodeAppro from './NodeAppro.vue'
import NodeBranch from './NodeBranch.vue'
import NodeEnd from './NodeEnd.vue'
import NodeCondition from './NodeCondition.vue'
import NodeConditionBranch from './NodeConditionBranch.vue'
import NodeParallelBranch from './NodeParallelBranch.vue'
import NodeTimer from './NodeTimer.vue'
// import NodeStart from './NodeStart.vue'

export const nodeCom = {
  // START: NodeStart,
  APPROVAL: NodeAppro,
  CONDITIONAL_BRANCH: NodeConditionBranch,
  CONDITION: NodeCondition,
  PARALLEL_BRANCH: NodeParallelBranch,
  CHOICE_BRANCH: NodeBranch,
  END: NodeEnd,
  TIMER: NodeTimer,
}
