
function butCalculate_onClick() {
    if (CheckForValidInput(form.sideA.value, form.sideB.value, form.sideC.value, form.angleB.value, form.angleA.value)) {
        if (SolveForAngles(form.sideA.value, form.sideB.value, form.sideC.value, form.angleB.value, form.angleA.value)) {
            SolveForSides(form.sideA.value, form.sideB.value, form.sideC.value, form.angleB.value, form.angleA.value)
        }
    }
}
function CheckForValidInput(sideA, sideB, sideC, angleB, angleA) {
    // check to see if both angles were input and they don't add up to 90
    if (angleB > 0 && angleA > 0) {
        var sum = parseFloat(angleB) + parseFloat(angleA)
        if (sum != 90) {
            alert("You input two angles that do not add up to 90 degrees. Please input only one angle or two angles that add up to 90 degrees")
            return false
        }
    }
    // check to see if three sides were input and it is not a real triangle
    if (sideA > 0 && sideB > 0 && sideC > 0) {
        sideA = parseFloat(sideA)
        sideB = parseFloat(sideB)
        sideC = parseFloat(sideC)
        if (sideC != Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2))) {
            alert("You input three sides, but they do not make a right triangle")
            return false
        }
    }

    return true
}
function RadiansToDegrees(valRad) {
    return (360 / (2 * Math.PI) * valRad)
}
function DegreesToRadians(valDeg) {
    return ((2 * Math.PI) / 360 * valDeg)
}
function SolveForAngles(sideA, sideB, sideC, angleB, angleA) {
    if (angleB > 0) {
        angleA = 90 - angleB;
    } else if (angleA > 0) {
        angleB = 90 - angleA;
    } else if (sideA > 0 && sideB > 0) {
        angleB = RadiansToDegrees(Math.atan(sideA / sideB))
        angleA = RadiansToDegrees(Math.atan(sideB / sideA))
    } else if (sideA > 0 && sideC > 0) {
        angleB = RadiansToDegrees(Math.asin(sideA / sideC))
        angleA = RadiansToDegrees(Math.acos(sideA / sideC))
    } else if (sideB > 0 && sideC > 0) {
        angleB = RadiansToDegrees(Math.acos(sideB / sideC))
        angleA = RadiansToDegrees(Math.asin(sideB / sideC))
    }
    if (angleB > 0 && angleA > 0) {
        form.angleB.value = angleB
        form.angleA.value = angleA
        return true
    } else {
        alert("Not enough information, you must input at least 1 side and an angle or 2 sides")
        return false
    }
}

function SolveForSides(sideA, sideB, sideC, angleB, angleA) {
    if (sideA > 0) {
        sideB = sideA / Math.tan(DegreesToRadians(angleB))
        sideC = sideA / Math.sin(DegreesToRadians(angleB))
    } else if (sideB > 0) {
        sideA = sideB / Math.tan(DegreesToRadians(angleA))
        sideC = sideB / Math.sin(DegreesToRadians(angleA))
    }
    else if (sideC > 0) {
        sideA = sideC * Math.sin(DegreesToRadians(angleB))
        sideB = sideC * Math.cos(DegreesToRadians(angleB))
    }
    if (sideA > 0 && sideB > 0 && sideC > 0) {
        form.sideA.value = sideA
        form.sideB.value = sideB
        form.sideC.value = sideC
    } else {
        alert("Not enough information, you must input at least 1 side and an angle or 2 sides")
    }

}

function clearForm() {
    form.sideA.value = "",
    form.sideB.value = "",
    form.sideC.value = "",
    form.angleA.value = "",
    form.angleB.value = "";
}