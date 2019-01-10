workflow "Test" {
  on = "push"
  resolves = ["borales/actions-yarn@master-2"]
}

action "borales/actions-yarn@master-1" {
  uses = "borales/actions-yarn@master"
  args = "test"
}

action "borales/actions-yarn@master" {
  uses = "borales/actions-yarn@master"
  args = "install"
}

action "borales/actions-yarn@master-2" {
  uses = "borales/actions-yarn@master"
  needs = ["borales/actions-yarn@master"]
  args = "test"
}
