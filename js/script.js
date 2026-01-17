/**
 * Ali Samuel - SIWES Portfolio
 * Week 1: JavaScript Fundamentals
 * This file contains interactive features for the portfolio website
 */

// ========================================
// INITIALIZATION
// ========================================
console.log("Script loaded successfully!");

// Portfolio variables
let portfolioName = "Ali Samuel's Portfolio";
let projectCount = 3;
let isComplete = false;

console.log("Portfolio:", portfolioName);
console.log("Projects:", projectCount);
console.log("Complete:", isComplete);

// ========================================
// GREETING FUNCTION
// ========================================
/**
 * Displays a time-appropriate greeting in the console
 * @returns {string} The greeting message
 */
function greetUser() {
    let currentHour = new Date().getHours();
    let greeting;
    
    // Determine greeting based on time of day
    if (currentHour < 12) {
        greeting = "Good morning!";
    } else if (currentHour < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }
    
    console.log(greeting + " Welcome to my portfolio!");
    return greeting;
}

// Initialize greeting
greetUser();

// ========================================
// IMAGE SLIDER FUNCTIONALITY
// ========================================
let slideIndex = 1;

/**
 * Changes the current slide by a specified increment
 * @param {number} n - The increment (1 for next, -1 for previous)
 */
function changeSlide(n) {
    showSlide(slideIndex += n);
}

/**
 * Jumps to a specific slide
 * @param {number} n - The slide number to display
 */
function currentSlide(n) {
    showSlide(slideIndex = n);
}

/**
 * Displays the specified slide and updates navigation dots
 * @param {number} n - The slide number to show
 */
function showSlide(n) {
    let slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.dot');
    
    // Loop back to first slide if past the end
    if (n > slides.length) { slideIndex = 1; }
    // Loop to last slide if before the beginning
    if (n < 1) { slideIndex = slides.length; }
    
    // Hide all slides by removing 'active' class
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Deactivate all dots
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Show the current slide
    slides[slideIndex - 1].classList.add('active');
    // Highlight the current dot
    dots[slideIndex - 1].classList.add('active');
}

// Auto-play slider: advance to next slide every 5 seconds
setInterval(() => {
    changeSlide(1);
}, 5000);
