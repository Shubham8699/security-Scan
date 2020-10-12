package com.securityscan.pojos;

import java.time.LocalDateTime;
import java.time.ZonedDateTime;
import java.util.Map;

import javax.persistence.*;

import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;
import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.vladmihalcea.hibernate.type.json.JsonStringType;

import lombok.Data;
import lombok.ToString;

@Entity
@Table(name="scans")
@Data
@ToString
@TypeDef(
	    name = "json", 
	    typeClass = JsonStringType.class
	)
public class Scan {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(length=15)
	private String status;
	
	public String getRepositoryName() {
		return repositoryName;
	}

	public void setRepositoryName(String repositoryName) {
		this.repositoryName = repositoryName;
	}

	@Column(length=15)
	private String repositoryName;
	
	@Type(type = "json")
	@Column(columnDefinition = "json",name="findings")
	private Map<String, Object> findings;
	
    //@DateTimeFormat(iso = DateTimeFormat.ISO.TIME)
   // @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    //@JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss.SSSZ", shape = JsonFormat.Shape.STRING)
	private ZonedDateTime QueuedAt;
	
	private ZonedDateTime ScannedAt;
	
	private ZonedDateTime FinishedAt;

	public Scan() {
		super();
		// TODO Auto-generated constructor stub
	}



	public Scan(Integer id, String status, String repositoryName, Map<String, Object> findings, ZonedDateTime queuedAt,
			ZonedDateTime scannedAt, ZonedDateTime finishedAt) {
		super();
		this.id = id;
		this.status = status;
		this.repositoryName = repositoryName;
		this.findings = findings;
		QueuedAt = queuedAt;
		ScannedAt = scannedAt;
		FinishedAt = finishedAt;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Map<String, Object> getFindings() {
		return findings;
	}

	public void setFindings(Map<String, Object> findings) {
		this.findings = findings;
	}

	public ZonedDateTime getQueuedAt() {
		return QueuedAt;
	}

	public void setQueuedAt(ZonedDateTime queuedAt) {
		QueuedAt = queuedAt;
	}

	public ZonedDateTime getScannedAt() {
		return ScannedAt;
	}

	public void setScannedAt(ZonedDateTime scannedAt) {
		ScannedAt = scannedAt;
	}

	public ZonedDateTime getFinishedAt() {
		return FinishedAt;
	}

	public void setFinishedAt(ZonedDateTime finishedAt) {
		FinishedAt = finishedAt;
	}

	@Override
	public String toString() {
		return "Scan [id=" + id + ", status=" + status + ", findings=" + findings + ", QueuedAt=" + QueuedAt
				+ ", ScannedAt=" + ScannedAt + ", FinishedAt=" + FinishedAt + "]";
	}
	
	
	

}
