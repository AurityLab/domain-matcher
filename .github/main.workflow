workflow "Test" {
  on = "push"
  resolves = ["test"]
}

action "install" {
  uses = "borales/actions-yarn@master"
  args = "install"
}

action "test" {
  uses = "borales/actions-yarn@master"
  needs = ["install"]
  args = "test"
}
