describe('tree', function() {
  var tree;
  var testObj = {};
  var plusOne = function(val){
    testObj[val] = val+1;
  };

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a("function");
    expect(tree.contains).to.be.a("function");
    expect(tree.hasOwnProperty("value")).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function(){
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function(){
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function(){
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('should correctly remove from parent when removeFromParent is invoked', function(){
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    tree.children[0].removeFromParent();
    tree.children[0].removeFromParent();
    
    expect(tree.contains(5)).to.equal(false);
    expect(tree.contains(7)).to.equal(false);
    expect(tree.contains(8)).to.equal(false);
  });

  it('should correctly accept callback and execute it on every value', function(){
    tree.addChild(1);
    tree.addChild(3);
    tree.children[0].addChild(5);
    tree.children[1].addChild(7);
    tree.transverse(plusOne);
    expect(testObj[1]).to.equal(2);
    expect(testObj[3]).to.equal(4);
    expect(testObj[5]).to.equal(6);
  });



});
