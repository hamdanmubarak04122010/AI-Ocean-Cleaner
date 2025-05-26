function showInstructions() {
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(36);
  text("🌊 Ocean Cleanup Game 🌊", width / 2, height / 2 - 180);
  
  textSize(20);
  text("Help clean the ocean by collecting all the trash!", width / 2, height / 2 - 130);
  
  // Game elements visualization
  textSize(16);
  text("This is your boat: ", width / 2 - 100, height / 2 - 90);
  fill(0, 180, 90);
  rect(width / 2 + 50, height / 2 - 95, 60, 40, 10);
  fill(255);
  ellipse(width / 2 + 35, height / 2 - 103, 5, 5);
  ellipse(width / 2 + 65, height / 2 - 103, 5, 5);
  
  text("This is trash: ", width / 2 - 100, height / 2 - 60);
  fill(255, 255, 255, 200);
  ellipse(width / 2 + 50, height / 2 - 55, 18);
  fill(100, 100, 255, 80);
  ellipse(width / 2 + 50, height / 2 - 55, 28);
  
  fill(255);
  textSize(16);
  text("HOW TO PLAY:", width / 2, height / 2 - 20);
  text("• Use WASD or Arrow Keys to move your boat", width / 2, height / 2);
  text("• The white circle shows your collection range", width / 2, height / 2 + 20);
  text("• When not moving, the boat will automatically", width / 2, height / 2 + 40);
  text("  move toward the nearest piece of trash", width / 2, height / 2 + 60);
  text("• Clear all trash to win!", width / 2, height / 2 + 90);
}