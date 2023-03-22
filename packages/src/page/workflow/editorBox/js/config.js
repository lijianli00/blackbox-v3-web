import { cloneDeep } from 'lodash'

// 条件节点数据
export const ConditionData = {
  text: '条件1',
  type: 'CONDITION',
  properties: {
    conditions: [
      [
        {
          id: null, //变量主键
          varType: 0, //变量类型0:String；1:Integer;2:Double
          varValue: null, //变量的字段
          conditionVal: null, //条件的值，
        },
      ],
    ],
  },
  nextNode: null,
  childNodes: [],
}

// 条件分支数据
export const ConditionBranchData = {
  type: 'CONDITIONAL_BRANCH',
  text: '条件分支',
  nextNode: null,
  childNodes: [
    cloneDeep(ConditionData),
    {
      ...cloneDeep(ConditionData),
      text: '条件2',
    },
  ],
}

// 审批节点数据
export const ApproData = {
  text: '审批1',
  type: 'APPROVAL',
  properties: {
    approType: 0,
  },
  nextNode: null,
  childNodes: [],
}
