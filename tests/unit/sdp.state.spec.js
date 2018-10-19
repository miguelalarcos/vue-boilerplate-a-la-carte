import { initialize, ready, handleData } from '@/sdp'

describe('Testing sdp handling state', () => {
  it('initialize empty state', () => {
    let state = {}
    const data = {msg: 'initializing', id: 'my_sub'}
    initialize(state, data)
    expect(state).toEqual({ready: {my_sub: false}, subs: {my_sub: []}})
  })

  it('initialize not empty state', () => {
    let state = {ready: {my_sub: true, my2: true}, subs: {my2:[1,2,3], my_sub: [1,2,3]}}
    const data = {msg: 'initializing', id: 'my_sub'}
    initialize(state, data)
    expect(state).toEqual({ready: {my_sub: false, my2: true}, subs: {my2:[1,2,3], my_sub: []}})
  })

  it('ready when empty state', () => {
    let state = {}
    const data = {msg: 'ready', id: 'my_sub'}
    ready(state, data)
    expect(state).toEqual({ready: {my_sub: true}})
  })

  it('ready not empty state', () => {
    let state = {ready: {my_sub: false, my2: true}, subs: {my2:[1,2,3], my_sub: [1,2,3]}}
    const data = {msg: 'ready', id: 'my_sub'}
    ready(state, data)
    expect(state).toEqual({ready: {my_sub: true, my2: true}, subs: {my2:[1,2,3], my_sub: [1,2,3]}})
  })

  it('handle data added', () => {
    let state = {subs: {my_sub: []}}
    const data = {msg: 'added', id: 'my_sub', doc: {id: 0, x: 0}}
    handleData(state, data)
    expect(state).toEqual({subs: {my_sub: [{id: 0, x: 0}]}})
  })

  it('handle data changed', () => {
    let state = {subs: {my_sub: [{id: 0, x: 0}, {id: 1, x: 1}]}}
    const data = {msg: 'changed', id: 'my_sub', doc: {id: 0, x: 5}}
    handleData(state, data)
    expect(state).toEqual({subs: {my_sub: [{id: 0, x: 5}, {id: 1, x: 1}]}})
  })

  it('handle delete removed', () => {
    let state = {subs: {my_sub: [{id: 0, x: 0}, {id: 1, x: 1}]}}
    const data = {msg: 'removed', id: 'my_sub', doc_id: 0}
    handleData(state, data)
    expect(state).toEqual({subs: {my_sub: [{id: 1, x: 1}]}})
  })

})
