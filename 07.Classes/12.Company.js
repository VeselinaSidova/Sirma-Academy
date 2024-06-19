class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (!name || !position || !department || salary === undefined || salary === null || salary < 0) {
            throw new Error("Invalid input!");
        }

        if (!this.departments[department]) {
            this.departments[department] = [];
        }

        this.departments[department].push({ name, salary, position });

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let bestDept = '';
        let highestAvgSalary = 0;

        for (const dept in this.departments) {
            const employees = this.departments[dept];
            const avgSalary = employees.reduce((sum, emp) => sum + emp.salary, 0) / employees.length;

            if (avgSalary > highestAvgSalary) {
                highestAvgSalary = avgSalary;
                bestDept = dept;
            }
        }

        const bestEmployees = this.departments[bestDept]
            .slice()
            .sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name));

        const result = [
            `Best Department is: ${bestDept}`,
            `Average salary: ${highestAvgSalary.toFixed(2)}`
        ];

        bestEmployees.forEach(emp => {
            result.push(`${emp.name} ${emp.salary} ${emp.position}`);
        });

        return result.join('\n');
    }
}

let c = new Company();
c.addEmployee("Stamat", 2000, "engineer", "Construction");
c.addEmployee("Peter", 1500, "electrical engineer", "Construction");
c.addEmployee("Martin", 500, "support", "Construction");
c.addEmployee("Stanley", 2000, "architect", "Construction");
c.addEmployee("Stamat", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Peter", 1000, "graphical designer", "Marketing");
c.addEmployee("George", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
