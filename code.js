var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["99c7c210-831e-47b2-bf31-856021bd9358","da2848ba-4006-4783-af63-0828c146a827","7af67aff-e243-4e89-9a93-d495898e300d"],"propsByKey":{"99c7c210-831e-47b2-bf31-856021bd9358":{"name":"bunny2_walk1_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Q06Mtp7OA9HZ97lXOvJ7J59dO3jcjyLu/category_animals/bunny2_walk1.png","frameSize":{"x":152,"y":193},"frameCount":2,"looping":true,"frameDelay":2,"version":"Q06Mtp7OA9HZ97lXOvJ7J59dO3jcjyLu","categories":["animals","characters"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":304,"y":193},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Q06Mtp7OA9HZ97lXOvJ7J59dO3jcjyLu/category_animals/bunny2_walk1.png"},"da2848ba-4006-4783-af63-0828c146a827":{"name":"turtle_1","sourceUrl":null,"frameSize":{"x":300,"y":146},"frameCount":1,"looping":true,"frameDelay":12,"version":"HCYEzRABDJWcO95Mq.vFGYSRdD1.fYJg","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":146},"rootRelativePath":"assets/da2848ba-4006-4783-af63-0828c146a827.png"},"7af67aff-e243-4e89-9a93-d495898e300d":{"name":"little_robot_1","sourceUrl":"assets/api/v1/animation-library/gamelab/sN2hjAr9KTf9BcPT52K1YA4BLkKyA53k/category_robots/little_robot.png","frameSize":{"x":161,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"sN2hjAr9KTf9BcPT52K1YA4BLkKyA53k","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":161,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/sN2hjAr9KTf9BcPT52K1YA4BLkKyA53k/category_robots/little_robot.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var ball = createSprite(200,200,10,10);
var wall1 =  createSprite(380,150,10,70)
var wall3 = createSprite(150,100,10,70)
function draw()
{
  background("white");
  createEdgeSprites();
  line(0, 0, 400, 400);
  
  
  ball.bounceOff(edges);
  
  ball.x = World.mouseX;
  ball.y = World.mouseY;
  
  if(ball.isTouching(wall1) || ball.isTouching(wall3))
  
  {
    ball.x = 200;
    ball.y = 200
  }
  
  drawSprites();
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
