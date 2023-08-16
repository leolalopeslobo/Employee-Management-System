package com.project.employee_adminstration_system.model;

import javax.persistence.CascadeType;
//import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.web.multipart.MultipartFile;

@Table(name = "salary")
@Entity(name = "salary")

public class Salary {

	private long salary_id;
	private String salary_employee_id;
	private String salary_month;
	private String salary_working_days;
	private long salary_basic;
	private long salary_hra;
	private long salary_mediclaim;
	private long salary_ta;
	private long salary_da;
	private long salary_reimbursement;
	private long salary_ca;
	private long salary_others;
	private long salary_dpf;
	private long salary_dtax;
	private long salary_desc;
	private long salary_total;
	private long salary_dedc;
	private MultipartFile salary_slip;
	private String salary_slip_filename;
	
	
	
	public String getSalary_slip_filename() {
		return salary_slip_filename;
	}



	public void setSalary_slip_filename(String salary_slip_filename) {
		this.salary_slip_filename = salary_slip_filename;
	}





	public Salary(long salary_id, String salary_employee_id, String salary_month, String salary_working_days,
				  long salary_basic, long salary_hra, long salary_mediclaim, long salary_ta, long salary_da,
				  long salary_reimbursement, long salary_ca, long salary_others, long salary_dpf, long salary_dtax,
				  long salary_desc, long salary_total, long salary_dedc, MultipartFile salary_slip,
				  String salary_slip_filename) {
		super();
		this.salary_id = salary_id;
		this.salary_employee_id = salary_employee_id;
		this.salary_month = salary_month;
		this.salary_working_days = salary_working_days;
		this.salary_basic = salary_basic;
		this.salary_hra = salary_hra;
		this.salary_mediclaim = salary_mediclaim;
		this.salary_ta = salary_ta;
		this.salary_da = salary_da;
		this.salary_reimbursement = salary_reimbursement;
		this.salary_ca = salary_ca;
		this.salary_others = salary_others;
		this.salary_dpf = salary_dpf;
		this.salary_dtax = salary_dtax;
		this.salary_desc = salary_desc;
		this.salary_total = salary_total;
		this.salary_dedc = salary_dedc;
		this.salary_slip = salary_slip;
		this.salary_slip_filename = salary_slip_filename;
	}



	@Override
	public String toString() {
		return "Salary [salary_id=" + salary_id + ", salary_employee_id=" + salary_employee_id + ", salary_month="
				+ salary_month + ", salary_working_days=" + salary_working_days + ", salary_basic=" + salary_basic
				+ ", salary_hra=" + salary_hra + ", salary_mediclaim=" + salary_mediclaim + ", salary_ta=" + salary_ta
				+ ", salary_da=" + salary_da + ", salary_reimbursement=" + salary_reimbursement + ", salary_ca="
				+ salary_ca + ", salary_others=" + salary_others + ", salary_dpf=" + salary_dpf + ", salary_dtax="
				+ salary_dtax + ", salary_desc=" + salary_desc + ", salary_total=" + salary_total + ", salary_dedc="
				+ salary_dedc + ", salary_slip=" + salary_slip + ", salary_slip_filename=" + salary_slip_filename + "]";
	}



	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public long getSalary_id() {
		return salary_id;
	}



	public void setSalary_id(long salary_id) {
		this.salary_id = salary_id;
	}



	public String getSalary_employee_id() {
		return salary_employee_id;
	}



	public void setSalary_employee_id(String salary_employee_id) {
		this.salary_employee_id = salary_employee_id;
	}



	public String getSalary_month() {
		return salary_month;
	}



	public void setSalary_month(String salary_month) {
		this.salary_month = salary_month;
	}



	public String getSalary_working_days() {
		return salary_working_days;
	}



	public void setSalary_working_days(String salary_working_days) {
		this.salary_working_days = salary_working_days;
	}



	public long getSalary_basic() {
		return salary_basic;
	}



	public void setSalary_basic(long salary_basic) {
		this.salary_basic = salary_basic;
	}



	public long getSalary_hra() {
		return salary_hra;
	}



	public void setSalary_hra(long salary_hra) {
		this.salary_hra = salary_hra;
	}



	public long getSalary_mediclaim() {
		return salary_mediclaim;
	}



	public void setSalary_mediclaim(long salary_mediclaim) {
		this.salary_mediclaim = salary_mediclaim;
	}



	public long getSalary_ta() {
		return salary_ta;
	}



	public void setSalary_ta(long salary_ta) {
		this.salary_ta = salary_ta;
	}



	public long getSalary_da() {
		return salary_da;
	}



	public void setSalary_da(long salary_da) {
		this.salary_da = salary_da;
	}



	public long getSalary_reimbursement() {
		return salary_reimbursement;
	}



	public void setSalary_reimbursement(long salary_reimbursement) {
		this.salary_reimbursement = salary_reimbursement;
	}



	public long getSalary_ca() {
		return salary_ca;
	}



	public void setSalary_ca(long salary_ca) {
		this.salary_ca = salary_ca;
	}



	public long getSalary_others() {
		return salary_others;
	}



	public void setSalary_others(long salary_others) {
		this.salary_others = salary_others;
	}



	public long getSalary_dpf() {
		return salary_dpf;
	}



	public void setSalary_dpf(long salary_dpf) {
		this.salary_dpf = salary_dpf;
	}



	public long getSalary_dtax() {
		return salary_dtax;
	}



	public void setSalary_dtax(long salary_dtax) {
		this.salary_dtax = salary_dtax;
	}



	public long getSalary_desc() {
		return salary_desc;
	}



	public void setSalary_desc(long salary_desc) {
		this.salary_desc = salary_desc;
	}



	public long getSalary_total() {
		return salary_total;
	}



	public void setSalary_total(long salary_total) {
		this.salary_total = salary_total;
	}



	public long getSalary_dedc() {
		return salary_dedc;
	}



	public void setSalary_dedc(long salary_dedc) {
		this.salary_dedc = salary_dedc;
	}



	public void setSalary_slip(MultipartFile salary_slip) {
		this.salary_slip = salary_slip;
	}



	public Salary() {
		
	}
	
	
}
